import { Box } from '@chakra-ui/layout';

interface Props {
  videoId: string;
  startTime?: number;
}

export const YouTubeEmbed = ({ videoId, startTime = 0 }: Props) => {
  return (
    <Box h={[240, 320, 400]}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?start=${startTime}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  );
};
