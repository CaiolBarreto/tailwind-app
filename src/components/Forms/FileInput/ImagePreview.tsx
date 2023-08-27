'use client'

import { User } from 'lucide-react'
import { useFileInput } from './Root'
import { useMemo } from 'react'
import Image from 'next/image'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewUrl = useMemo(() => {
    if (files.length > 0) {
      return URL.createObjectURL(files[0])
    }
  }, [files])

  if (previewUrl === undefined) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
        <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
      </div>
    )
  } else {
    return (
      <Image
        src={previewUrl}
        alt="image"
        width={64}
        height={64}
        className="rounded-full object-cover"
      />
    )
  }
}
