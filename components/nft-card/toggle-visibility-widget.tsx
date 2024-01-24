import { toast } from "sonner";
import { Info } from "lucide-react";

import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { HoverTip } from "~/components/hover-tip";
import { Separator } from "~/components/ui/separator";

import { trpc } from "~/app/_trpc/client";

interface IProps {
  id: string;
  isPublished: boolean;
}

export function ToggleVisibilityWidget({ id, isPublished }: IProps) {
  const { mutate: toggleTokenVisibility } =
    trpc.nft.toggleVisibility.useMutation({
      onError: ({ message }) => toast.error(message),
      onSuccess: (isPublished) => {
        if (isPublished) {
          return toast.success("Token is now visible to the public");
        }
        return toast.success("Token is now hidden from the public");
      },
    });

  return (
    <div>
      <Separator className="mt-2" />
      <div className="my-4 flex items-center justify-between">
        <Label className="flex items-center gap-x-2">
          <span>Visible to public?</span>
          <HoverTip
            side="top"
            message="Enabling this will make your token visible to the public"
            contentClassName="max-w-[20rem] text-xs bg-neutral-700 border-none"
          >
            <Info className="h-4 w-4" />
          </HoverTip>
        </Label>
        <Switch
          defaultChecked={isPublished}
          onCheckedChange={() => toggleTokenVisibility(id)}
        />
      </div>
    </div>
  );
}
