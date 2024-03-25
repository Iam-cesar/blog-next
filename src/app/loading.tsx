import { Group, Loader } from "@mantine/core";

export default function Loading() {
  return (
    <Group w="100%" h="70vh" justify="center" align="center">
      <Loader color="var(--mantine-color-gray-7)" />
    </Group>
  );
}
