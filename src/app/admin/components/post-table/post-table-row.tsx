"use client"

import { Button } from "@/components/ui/button"
import { Pencil, Trash } from "lucide-react"
import { TableCell, TableRow } from "@/components/ui/table"
import { Post } from "@/models/Post"
import { uppercaseFirstCharacter } from "@/utils/uppercase-first-character"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { ManagePostModal } from "../manage-post/manage-post-modal"
import { Category } from "@/models/Category"
import { DeletePostModal } from "../manage-post/delete-post-modal"


interface TableRowProps {
    post: Post
    categories: Category[]
}

export function PostTableRow({ post, categories }: TableRowProps) {

    return (
        <TableRow>
            <TableCell>{ uppercaseFirstCharacter(post.title) }</TableCell>
            <TableCell
                className="flex items-center justify-end gap-2"
                >
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            variant="outline"
                            className="h-8 w-8 p-2"
                            >
                            <Pencil
                                className="w-4 h-4"
                                />
                        </Button>
                    </DialogTrigger>
                    <ManagePostModal
                        categories={categories}
                        post={post}
                        />
                </Dialog>
                
                <Dialog>
                    <DialogTrigger>
                        <Button
                            variant="outline"
                            className="h-8 w-8 p-2"
                            >
                            <Trash
                                className="w-4 h-4"
                                />
                        </Button>
                    </DialogTrigger>
                    <DeletePostModal
                        post={post}
                        />
                </Dialog>
            </TableCell>
        </TableRow>
    )
}