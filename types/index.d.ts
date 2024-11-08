declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subText: string;
  user?: string;
}

declare interface SidebarProps {
  user: User;
}

declare type User = {
  $id: string;
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
};
