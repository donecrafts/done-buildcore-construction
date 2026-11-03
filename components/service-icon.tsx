import {
  Building2,
  ClipboardList,
  Compass,
  Droplets,
  Hammer,
  HardHat,
  Landmark,
  Package,
} from "lucide-react";
import type { IconName } from "@/data/services";

const icons = {
  compass: Compass,
  building: Building2,
  droplets: Droplets,
  package: Package,
  hardhat: HardHat,
  hammer: Hammer,
  landmark: Landmark,
  clipboard: ClipboardList,
} as const;

export function ServiceIcon({
  name,
  className = "h-7 w-7",
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" strokeWidth={1.75} />;
}
