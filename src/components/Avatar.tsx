
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/laur5287.png" alt="@shadcn" />
      <AvatarFallback>Lrs</AvatarFallback>
    </Avatar>
  )
}
