"use client"

interface ErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
    return (
        <h1>The post you were looking for doesn't exist.</h1>
    )
}