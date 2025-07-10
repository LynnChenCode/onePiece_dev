// import m1 from '@/music/Battle Symphony-Linkin Park.mp3'
// import m2 from '@/music/Catch My Breath-Kelly Clarkson.mp3'
// import m3 from '@/music/Go Again-King CAAN,ELYSA.mp3'
// import m4 from '@/music/One Thing-One Direction.mp3'
// import m5 from '@/music/Right Now-Akon.mp3'
// import m6 from '@/music/See You Again-Wiz KhalifaCharlie Puth.mp3'
// import m7 from '@/music/Some Just Like This-The Chainsmokers,Coldplay.mp3'
// import m8 from '@/music/Wicked Wonderland-Tungevaag.mp3'
// import m9 from '@/music/刚好遇见你-李玉刚.mp3'
// import m10 from '@/music/前前前世-RADWIMPS.mp3'
// import m11 from '@/music/向往-李健.mp3'
// import m12 from '@/music/夏至未至-胡夏.mp3'
// import m13 from '@/music/我会等-承桓.mp3'
// import m14 from '@/music/着魔-张杰.mp3'
// import m15 from '@/music/缺氧-轩姨（相信光）.mp3'
// import m16 from '@/music/群青-YOASOBI.mp3'
// import m17 from '@/music/逆光-孙燕姿.mp3'
// import m18 from '@/music/龙卷风-周杰伦.mp3'


// import lrc1  from '@/lrc/Battle Symphony - Linkin Park.lrc?raw'
// import lrc2 from '@/lrc/Catch My Breath - Kelly Clarkson.lrc?raw'
// import lrc3 from '@/lrc/Go Again - King CAAN,ELYSA.lrc?raw'
// import lrc4 from '@/lrc/One Thing - One Direction.lrc?raw'
// import lrc5 from '@/lrc/Right Now - Akon.lrc?raw'
// import lrc6 from '@/lrc/See You Again - Wiz KhalifaCharlie Puth.lrc?raw'
// import lrc7 from '@/lrc/Some Just Like This - The Chainsmokers,Coldplay.lrc?raw'
// import lrc8 from '@/lrc/Wicked Wonderland - Tungevaag.lrc?raw'
// import lrc9 from '@/lrc/刚好遇见你 - 李玉刚.lrc?raw'
// import lrc10 from '@lrc/前前前世 - RADWIMPS.lrc?raw'
// import lrc11 from '@lrc/向往 - 李健.lrc?raw'
// import lrc12 from '@lrc/夏至未至 - 胡夏.lrc?raw'
// import lrc13 from '@lrc/我会等 - 承桓.lrc?raw'
// import lrc14 from '@lrc/着魔 - 张杰.lrc?raw'
// import lrc15 from '@lrc/缺氧 - 轩姨（相信光）.lrc?raw'
// import lrc16 from '@lrc/群青 - YOASOBI.lrc?raw'
// import lrc17 from '@lrc/逆光 - 孙燕姿.lrc?raw'
// import lrc18 from '@lrc/龙卷风 - 周杰伦.lrc?raw'
 const musiclist = import.meta.glob('/src/assets/music/*.mp3', {eager: true})
const lrclist = import.meta.glob('/src/assets/lrc/*.lrc',{ as: 'raw', eager: true })
let audiolist=[]
for (const key in musiclist) {
    audiolist.push({
        name:key.replace(/\/src\/assets\/music\//,'').replace(/.mp3/,'').split("-")[0],
        artist:key.replace(/\/src\/assets\/music\//,'').replace(/.mp3/,'').split("-")[1],
        url:key,
        cover:'',
        lrc:''
    })
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
}
 let a=0
for (const path in lrclist) {
    audiolist[a].lrc=lrclist[path].valueOf()
    a++
  }


// for (const key in lrclist) {
//     console.log(key.concat("?raw"))
 
//     audiolist[a].lrc=key.concat("?raw")
//     a++
// }

// interface audiolist{
//     name: string
//     artist: string
//     url: string
//     cover: string
//     lrc:string
// }



export default audiolist
// musiclist.push({
//     name:'Battle Symphony',
//     artist:'Linkin Park',
//     url:m1,
//     cover:'https://p2.music.126.net/xLb-6-DFfoxqdaTp3d8Y_A==/109951164077184230.jpg?param=180y180',
//     lrc:lrc1
// })

// musiclist.push({
//     name:'Catch My Breath',
//     artist:'Kelly Clarkson',
//     url:m2,
//     cover:'http://p1.music.126.net/oioz4AI79t_8hd6njGrWqA==/109951167302849274.jpg?param=300x300',
//     lrc:lrc2
// })

// musiclist.push({
//     name:'Go Again',
//     artist:'King CAAN,ELYSA',
//     url:m3,
//     cover:'https://p1.music.126.net/mdFJinHsJM0I5F69-mjH1g==/109951168710330241.jpg?param=180y180',
//     lrc:lrc3
// })

// musiclist.push({
//     name:'One Thing',
//     artist:'One Direction',
//     url:m4,
//     cover:'https://p1.music.126.net/I_Ycfm75HJujn8IDK7_ZdA==/109951165984011566.jpg?param=180y180',
//     lrc:lrc4
// })

// musiclist.push({
//     name:'One Thing',
//     artist:'One Direction',
//     url:m4,
//     cover:'https://p1.music.126.net/I_Ycfm75HJujn8IDK7_ZdA==/109951165984011566.jpg?param=180y180',
//     lrc:lrc4
// })
