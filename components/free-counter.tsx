"use client"

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Code, ImageIcon, MessageSquare, Music, Rocket, VideoIcon, Zap } from "lucide-react";
import { motion } from 'framer-motion';
import { useProModal } from "@/hooks/use-pro-modal";



const tools = [
    {
        label: 'Conversation',
        icon: MessageSquare,
        href: '/conversation',
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
    },
    {
        label: 'Audio Generation',
        icon: Music,
        href: '/music',
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
    {
        label: 'Image Generation',
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: '/image',
    },
    {
        label: 'Video Generation',
        icon: VideoIcon,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        href: '/video',
    },
    {
        label: 'Code Generation',
        icon: Code,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: '/code',
    },
];

interface FreeCounterProps {
    apiLimitCount: number;
    isPro: boolean;
};

export const FreeCounter = ({
    apiLimitCount = 0,
    isPro = false,
}: FreeCounterProps) => {
    const proModal = useProModal();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null
    }

    if (isPro) {
        return null
    }

    return (

        <div className="px-3">
            <Card className="bg-white/10 border-0">
                <CardContent className="py-2">
                    <div className="text-center text-sm text-white mb-4 space-y-2">
                        <p> {apiLimitCount} / {MAX_FREE_COUNTS} Free Trial</p>
                        <Progress
                            className="h-3 p-2"
                            value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
                        />
                        <motion.button
                            onClick={proModal.onOpen}
                            className="w-full bg-[skyblue]/50  outline outline-1 outline-[white] h-8 font-extrabold text-lg rounded-lg text-[white]"
                            whileHover={{
                                scale: 1.1, // Increase the size on hover
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Add a subtle box shadow
                            }}
                        >
                            <div className="flex justify-center gap-2">
                                <div className=" align-center justify-items-start text-[white]">
                            <Rocket/> 
                            </div>
                                Upgrade To Pro
                                </div>
                        </motion.button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}