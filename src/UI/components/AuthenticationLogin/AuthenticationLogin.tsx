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
import { isEmail, useForm } from "@mantine/form";
import AuthService from "@services/AuthService";
import {
  INVALID_EMAIL,
  INVALID_PASSWORD_MESSAGE,
  PASSWORD_PATTERN,
} from "@shared/utils/constants";
import { routes } from "@shared/utils/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TNotification } from "../AuthenticationSignUp/types";
import classes from "./AuthenticationLogin.module.css";

const { HOME } = routes.appRoutes;

export function AuthenticationLogin() {
  const { signIn, isLoading } = AuthService();
  const { push } = useRouter();

  const [notification, setNotification] = useState<TNotification>({
    hasError: false,
    message: undefined,
  });

  const form = useForm<IFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: isEmail(INVALID_EMAIL),
      password: (value) =>
        !PASSWORD_PATTERN.test(value) ? INVALID_PASSWORD_MESSAGE : null,
    },
  });

  const closeErrorNotification = () =>
    setNotification((prev) => ({ ...prev, hasError: false }));

  async function submitForm() {
    const { hasError, message } = await signIn(form.values);
    setNotification((prev) => ({ ...prev, hasError, message }));
    if (!hasError) push(HOME);
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>

      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Link href="/sign-up" className={classes.linkDefault}>
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(() => submitForm())}>
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
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
            {isLoading ? <Loader color="white" size={18} /> : "Log in"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
