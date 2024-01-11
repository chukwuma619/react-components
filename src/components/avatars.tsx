import avatarTheme from "@/themes/avatar";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Avatar(
    { 
        src, 
        alt, 
        size = "base",
        radius = "circle",
        notification_dot 
    }:{ src: string | StaticImport, 
        alt: string, 
        size: keyof avatarProps['size'] 
        radius?: keyof avatarProps['radius']
        notification_dot?: boolean,
    }) {
    return (
        <div className={`${avatarTheme.base} ${avatarTheme.radius[radius]}`}>
            <Image src={src} alt={alt} className={`${avatarTheme.radius[radius]}`} width={avatarTheme.size[size].width} height={avatarTheme.size[size].height} />
            {notification_dot && <div className={`
            ${size=="xs"? "border-[1.5px]": size=="sm"? "border-[1.5px]": size=="base"? 'border-2': size=="lg"? "border-2": "border-[3px]"} 
             border-white bg-green-400 rounded-full absolute right-0 top-0 
             ${size=="xs" && radius == "rounded"? "-mr-[5.75px] -mt-[5.75px]": 
             size=="sm" && radius == "rounded"? "-mr-[6.75px] -mt-[6.75px]":
             size=="base" && radius == "rounded"? "-mr-[9px] -mt-[9px]":
             size=="lg" && radius == "rounded"? "-mr-[11px] -mt-[11px]": 
             size=="lg" && radius == "rounded"? "-mr-[15.5px] -mt-[15.5px]" :""}
            ${size=="xs"? "size-2.5": size=="sm"? "size-3": size=="base"? 'size-4': size=="lg"? "size-5": "size-7"}`}></div>}
        </div>
    )
}