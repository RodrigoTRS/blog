"use client"

import { Button } from "@/components/ui/button";
import { DialogTitle, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Category } from "@/models/Category";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CategoryButton } from "./category-button";
import { useEffect, useState } from "react";
import { createPost } from "@/actions/create-post";
import { useRouter } from "next/navigation";
import { Post } from "@/models/Post";

const createPostModalSchema = z.object({
    title: z.string(),
    categories: z.array(z.string()),
    content: z.string()
})

type CreatePostModalData = z.infer<typeof createPostModalSchema>

interface CreatePostModalProps {
    categories: Category[]
}

export function ManagePostModal({ categories }: CreatePostModalProps) {

    const router = useRouter()

    const {
        handleSubmit,
        register,
        setValue,
        reset,
        formState: {
            isSubmitting,
            errors
        }
    } = useForm<CreatePostModalData>({
        resolver: zodResolver(createPostModalSchema)
    })

    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    function fillForm(post: Post) {
        const categoriesArray = post.categories.map((category) => {
            return category.title
        })

        setValue("title", post.title),
        setSelectedCategories(categoriesArray),
        setValue("content", post.content)
    }

    function toggleCategorySelection(title: string) {
        const isSelected = selectedCategories.includes(title)

        if (isSelected) {
            setSelectedCategories((state) => state.filter((category) => category !== title));
        } else {
            setSelectedCategories((state) => [...state, title])
        }
    }

    async function handleFormSubmit({
        title,
        categories,
        content
    }: CreatePostModalData) {
        await createPost({
            title,
            categories,
            content
        })
        router.refresh()
        formReset()
    }

    function formReset() {
        setSelectedCategories([])
        reset()
    }

    useEffect(() => {
        setValue("categories", selectedCategories)
    }, [selectedCategories, setValue])


    return (
        <DialogContent>
            <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="flex flex-col gap-4"
                >
                <DialogHeader>
                    <DialogTitle>Create new post</DialogTitle>
                    <DialogDescription>Fill in the form to create a new post</DialogDescription>
                </DialogHeader>

                <Separator className="my-2"/>

                <div className="flex flex-col gap-4">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        type="text"
                        id="title"
                        {...register("title")}
                        />
                        
                    {errors.title && (
                        <p className="text-rose-400 text-xs">
                            {errors.title.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-4">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                        className="resize-none h-[240px]"
                        id="content"
                        {...register("content")}
                        />
                </div>

                <div className="flex flex-col gap-4">
                    <Label htmlFor="categories">Categories</Label>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(({ title, id }) => {
                            const isSelected = selectedCategories.includes(title)

                            return (
                                <CategoryButton
                                    isSelected={isSelected}
                                    key={id}
                                    title={title}
                                    selectionFn={toggleCategorySelection}
                                />
                            )
                        })}
                    </div>
                </div>

                <DialogFooter className="mt-4">

                    <DialogTrigger asChild>
                        <Button variant="outline">
                            Cancel
                        </Button>
                    </DialogTrigger>

                    <DialogTrigger asChild>
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </DialogTrigger>

                </DialogFooter>
            </form>
        </DialogContent>
    )
}