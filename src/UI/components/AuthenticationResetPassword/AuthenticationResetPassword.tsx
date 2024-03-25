import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Group,
  Paper,
  Text,
  TextInput,
  Title,
  rem,
} from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import { INVALID_EMAIL } from "@shared/utils/constants";
import { IconArrowLeft } from "@tabler/icons-react";
import classes from "./AuthenticationResetPassword.module.css";
import { IFormValues } from "./types";

export function AuthenticationResetPassword() {
  const form = useForm<IFormValues>({
    validate: {
      email: isEmail(INVALID_EMAIL),
    },
    initialValues: {
      email: "",
    },
  });

  async function submitForm() {}

  return (
    <Container size={460} my={30}>
      <Title className={classes.title} ta="center">
        Forgot your password?
      </Title>

      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <form onSubmit={form.onSubmit(() => submitForm())}>
          <TextInput label="Your email" placeholder="me@mantine.dev" required />

          <Group justify="space-between" mt="lg" className={classes.controls}>
            <Anchor
              c="dimmed"
              size="sm"
              className={classes.control}
              href="/login"
            >
              <Center inline>
                <IconArrowLeft
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
                <Box ml={5}>Back to the login page</Box>
              </Center>
            </Anchor>

            <Button className={classes.control} type="submit">
              Reset password
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}
