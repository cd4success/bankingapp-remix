import { AppShell, Burger, Group, Skeleton, NavLink } from '@mantine/core';
import { HomeIcon, DropdownMenuIcon, BackpackIcon } from '@radix-ui/react-icons';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import { Outlet } from "@remix-run/react";

export default function UserLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          {/* <MantineLogo size={30} /> */}
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
      <NavLink label="First child link" href="#required-for-focus" leftSection={<HomeIcon />} />
      <NavLink
          href="#required-for-focus"
          label="First parent link"
          leftSection={<DropdownMenuIcon />}
          childrenOffset={28}
        >
          <NavLink href="#required-for-focus" label="First child link" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Nested parent link" childrenOffset={28} href="#required-for-focus">
            <NavLink label="First child link" href="#required-for-focus" />
            <NavLink label="Second child link" href="#required-for-focus" />
            <NavLink label="Third child link" href="#required-for-focus" />
          </NavLink>
        </NavLink>

        <NavLink
          href="#required-for-focus"
          label="Second parent link"
          leftSection={<BackpackIcon />}
          childrenOffset={28}
          defaultOpened
        >
          <NavLink label="First child link" href="#required-for-focus" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Third child link" href="#required-for-focus" />
        </NavLink>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}