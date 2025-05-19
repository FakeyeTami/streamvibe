import DeviceCard from "@/components/DeviceCard";
// @ts-ignore
import {
  Gamepad2,
  Headset,
  Laptop,
  Smartphone,
  Tablet,
  TvMinimalPlay,
} from "lucide-react";

const supportedDevices = [
  { icon: <Smartphone className="icon-style" />, label: "Smartphone" },
  { icon: <Tablet className="icon-style" />, label: "Tablet" },
  { icon: <TvMinimalPlay className="icon-style" />, label: "Smart TV" },
  { icon: <Laptop className="icon-style" />, label: "Laptops" },
  { icon: <Gamepad2 className="icon-style" />, label: "Gaming Consoles" },
  { icon: <Headset className="icon-style" />, label: "VR Headsets" },
];

export function SupportedDevices() {
  return (
    <section className="section-container-wide mt-72">
      <div className=" flex flex-col gap-y-4">
        <h2 className="heading-secondary">
          We Provide you streaming experience across various devices.
        </h2>
        <p className="paragraph-text text-left">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {supportedDevices.map((device, index) => (
          <DeviceCard
            key={index}
            icon={device.icon}
            label={device.label}
            description={
              "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          />
        ))}
      </div>
    </section>
  );
}
