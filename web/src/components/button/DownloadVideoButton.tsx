import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ActivityIndicator from "../indicators/activity-indicator";
import { FaDownload } from "react-icons/fa";
import { formatUnixTimestampToDateTime } from "@/utils/dateUtil";
import { cn } from "@/lib/utils";
import { useTranslation } from 'react-i18next';
type DownloadVideoButtonProps = {
  source: string;
  camera: string;
  startTime: number;
  className?: string;
};

export function DownloadVideoButton({
  source,
  camera,
  startTime,
  className,
}: DownloadVideoButtonProps) {
  const { t } = useTranslation();
  const [isDownloading, setIsDownloading] = useState(false);

  const formattedDate = formatUnixTimestampToDateTime(startTime, {
    strftime_fmt: "%D-%T",
    time_style: "medium",
    date_style: "medium",
  });
  const filename = `${camera}_${formattedDate}.mp4`;

  const handleDownloadStart = () => {
    setIsDownloading(true);
    toast.success(t("your_review_item_video_has_started_downloading"), {
      position: "top-center",
    });
  };

  return (
    <div className="flex justify-center">
      <Button
        asChild
        disabled={isDownloading}
        className="flex items-center gap-2"
        size="sm"
        aria-label={t("download_video")}
      >
        <a href={source} download={filename} onClick={handleDownloadStart}>
          {isDownloading ? (
            <ActivityIndicator className="size-4" />
          ) : (
            <FaDownload
              className={cn("size-4 text-secondary-foreground", className)}
            />
          )}
        </a>
      </Button>
    </div>
  );
}
