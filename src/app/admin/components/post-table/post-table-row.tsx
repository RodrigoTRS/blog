"use client"

import { Button } from "@/components/ui/button"
import { Pencil, Trash } from "lucide-react"
import { TableCell, TableRow } from "@/components/ui/table"
import { Post } from "@/models/Post"
import { uppercaseFirstCharacter } from "@/utils/uppercase-first-character"
import { DialogTrigger } from "@/components/ui/dialog"


interface TableRowProps {
    post: Post
}

export function PostTableRow({ post }: TableRowProps) {


    return (
        <TableRow>
            <TableCell>{ uppercaseFirstCharacter(post.title) }</TableCell>
            <TableCell
                className="flex items-center justify-end gap-2"
                >

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

                <Button
                    variant="outline"
                    className="h-8 w-8 p-2"
                    >
                    <Trash
                        className="w-4 h-4"
                        />
                </Button>
            </TableCell>
        </TableRow>
    )
}