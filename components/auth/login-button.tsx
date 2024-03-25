// sample login page based on shadcn ui
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface LoginButtonProps{
    children: React.ReactNode;
    mode: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({
    children,
    mode,
    asChild ,
}: LoginButtonProps) => {
    const router = useRouter();

    const onClick = () => {
        console.log("Login Button Clicked!");
        router.push("/auth/login");
    }
    if (mode == "modal"){
        return (
            <span>
            TODO: Implement Modal
        </span>
        )
    }
    
    return (
    <span onClick={onClick} className="cursor-pointer">
        {children}
    </span>
    )
}




