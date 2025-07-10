import APlayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';
import list from '@/hooks/localmusicList.js'
const ap = new APlayer({
    container: document.getElementById('player'),
    fixed:true,
    listFolded: false,
    lrcType: 1,
    audio: list
  });
export default ap