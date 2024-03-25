import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Loader,
  Notification,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import AuthService from "@services/AuthService";
import {
  FIRST_NAME_REQUIRED,
  INVALID_EMAIL,
  INVALID_PASSWORD_MESSAGE,
  LAST_NAME_REQUIRED,
  PASSWORD_PATTERN,
} from "@shared/utils/constants";
import { routes } from "@shared/utils/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import classes from "./AuthenticationSignUp.module.css";
import { IFormValues, TNotification } from "./types";

const { HOME } = routes.appRoutes;

export function AuthenticationSignUp() {
  const { signUp, isLoading } = AuthService();
  const { push } = useRouter();

  const [notification, setNotification] = useState<TNotification>({
    hasError: false,
    message: undefined,
  });

  const closeErrorNotification = () =>
    setNotification((prev) => ({ ...prev, hasError: false }));

  const form = useForm<IFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate: {
      firstName: isNotEmpty(FIRST_NAME_REQUIRED),
      lastName: isNotEmpty(LAST_NAME_REQUIRED),
      email: isEmail(INVALID_EMAIL),
      password: (value) =>
        !PASSWORD_PATTERN.test(value) ? INVALID_PASSWORD_MESSAGE : null,
    },
  });

  async function submitForm() {
    const { hasError, message } = await signUp(form.values);
    setNotification((prev) => ({ ...prev, hasError, message }));
    if (!hasError) push(HOME);
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Create your account
      </Title>

      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{" "}
        <Link href="/login" className={classes.linkDefault}>
          <Anchor size="sm" component="button">
            Log in
          </Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(() => submitForm())}>
          <TextInput
            label="First name"
            placeholder="First name"
            required
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Last name"
            placeholder="Last name"
            required
            mt="xs"
            {...form.getInputProps("lastName")}
          />

          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            type="email"
            required
            mt="xs"
            autoComplete="off"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="xs"
            autoComplete="off"
            {...form.getInputProps("password")}
          />

          {notification.hasError ? (
            <Notification
              color="red"
              mt="xs"
              translate="yes"
              lang="pt-BR"
              onClose={closeErrorNotification}
            >
              {notification.message?.map((m) => <p key={m}>{m}</p>)}
            </Notification>
          ) : null}

          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />

            <Link href="/reset-password" className={classes.linkDefault}>
              <Anchor component="button" size="sm" type="button">
                Forgot password?
              </Anchor>
            </Link>
          </Group>

          <Button fullWidth mt="xl" type="submit">
            {isLoading ? <Loader color="white" size={18} /> : "Sign up"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
