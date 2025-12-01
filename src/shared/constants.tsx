import {
  HomeIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  MagnifyingGlassIcon as SearchIconSolid,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";

export const homeHeaderItems = [
  {
    label: "Search",
    icon: (
      <MagnifyingGlassIcon className="size-6 md:size-7 text-gray-900 stroke-2" />
    ),
    path: "/search",
  },
  {
    label: "Saved",
    icon: <HeartIcon className="size-6 md:size-7 text-gray-900 stroke-2" />,
    path: "/saved",
  },
];

export const savedHeaderItems = [
  {
    label: "Search",
    icon: (
      <MagnifyingGlassIcon className="size-6 md:size-7 text-gray-900 stroke-2" />
    ),
    path: "/search",
  },
  {
    label: "Home",
    icon: <HomeIcon className="size-6 md:size-7 text-gray-900 stroke-2" />,
    path: "/",
  },
];

export const navItems = [
  { label: "Home", icon: HomeIcon, iconSolid: HomeIconSolid, path: "/" },
  {
    label: "Search",
    icon: MagnifyingGlassIcon,
    iconSolid: SearchIconSolid,
    path: "/search",
  },
  {
    label: "Saved",
    icon: HeartIcon,
    iconSolid: HeartIconSolid,
    path: "/saved",
  },
];
