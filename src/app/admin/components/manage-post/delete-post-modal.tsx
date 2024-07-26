"use client"

import { deletePost } from "@/actions/delete-post";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogTrigger, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Post } from "@/models/Post";
import { useRouter } from "next/navigation"


interface DeletePostModalProps {
    post: Post
}

export function DeletePostModal({ post }: DeletePostModalProps) {

    const router = useRouter()

    function handleDeletePost() {
        deletePost({ id: post.id })
        router.refresh()
    }

    return (
        <DialogContent className="w-[400px]">
            <DialogHeader>
                <DialogTitle>Delete post</DialogTitle>
                <DialogDescription>Are you sure that you want to delete this post?</DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <DialogTrigger asChild>
                    <Button variant="outline">
                        Cancel
                    </Button>
                </DialogTrigger>

                <DialogTrigger asChild>
                    <Button 
                        variant="destructive"
                        onClick={() => handleDeletePost()}
                        >
                        Delete
                    </Button>
                </DialogTrigger>
            </DialogFooter>
        </DialogContent>
    )
}