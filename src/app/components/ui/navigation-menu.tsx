import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "./NavigationMenu";

export default function Header() {
  return (
    <NavigationMenu>

      {/* 🔥 الشعار */}
      <a href="/" className="flex items-center">
        <img
          src="https://i.im.ge/eBulqY/caslogo.png"
          alt="logo"
          className="h-10 w-auto"
        />
      </a>

      {/* 🔥 القائمة */}
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>الرئيسية</NavigationMenuTrigger>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>الخدمات</NavigationMenuTrigger>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>اتصل بنا</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>

    </NavigationMenu>
  );
}
