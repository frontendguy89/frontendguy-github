import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    weight: "700",
  });

export default function SkillBanner() {
  return (
    <figure className="bg-[url(/code.jpg)] overflow-hidden bg-center h-48 bg-cover bg-fixed bg-size-full flex items-center justify-center">
        <h2 className={`text-center ${robotoSlab.className} text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]`}>Skills</h2>
    </figure>
  );
}
