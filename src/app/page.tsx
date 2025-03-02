// import InfiniteMarquee from "@/components/infinite-marquee"

export default function Home() {
  // 更新示例資料陣列中的 username 格式
  const items = [
    {
      id: 1,
      avatar: "/avatars/daku.png",
      username: "@Euryka",
      content:
        "祝歌生日快樂~ お誕生日おめでとう！真的很高興能跟你伴歌~祝誕第二個生日真的歌後的每一天都很幸福，開朗歌，往後的日子也請多多指教。 ヽ(´▽`)/也希望歌能在未來的一年也能繼續每天開心直書、暢企劃、做自己想做的事~ 加油！！[J・ω・]J 開歌 [ノ・ω・]ノ 跳可愛！",
      decoration: "/decorations/gold-bell.png",
    },
    {
      id: 2,
      avatar: "/avatars/daku.png",
      username: "@Euryka",
      content: "恭喜新婚！願你們的未來充滿幸福與歡樂，攜手共度每一個美好時刻。祝福你們永遠相愛，白頭偕老！",
      decoration: "/decorations/gold-bell.png",
    },
    {
      id: 3,
      avatar: "/avatars/daku.png",
      username: "@Euryka",
      content: "感謝你一直以來的支持與鼓勵！你的友誼對我來說非常寶貴，希望我們的友誼能夠長長久久！",
      decoration: "/decorations/gold-bell.png",
    },
    {
      id: 4,
      avatar: "/avatars/daku.png",
      username: "@Euryka",
      content: "新年快樂！願新的一年裡，你能夠實現所有的夢想，生活充滿歡笑與幸福！",
      decoration: "/decorations/gold-bell.png",
    },
    {
      id: 5,
      avatar: "/avatars/daku.png",
      username: "@Euryka",
      content: "恭喜畢業！你的努力終於得到了回報，未來的道路一定會更加精彩！",
      decoration: "/decorations/gold-bell.png",
    },
    {
      id: 6,
      avatar: "/avatars/daku.png",
      username: "@Euryka",
      content: "生日快樂！願你在新的一歲裡，健康快樂，心想事成！",
      decoration: "/decorations/gold-bell.png",
    },
  ]

  return (
    <main className="min-h-screen bg-green-700 relative overflow-hidden">
      {/* 左側標題區域 */}
      <div className="absolute top-20 left-10 z-10 lg:block">
        <h1 className="text-4xl font-bold text-white">婚叫們的祝福</h1>
      </div>

      {/* 大圖區域 - 桌面版在左側，平板版在上方 */}
      <div className="hidden md:block lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:w-1/3 md:w-full md:h-1/3">
        <div className="w-full h-full flex items-center justify-center">
          <div className="bg-green-800/30 rounded-lg p-8 m-4 w-4/5 h-4/5 flex items-center justify-center">
            <span className="text-white text-xl">大圖區域</span>
          </div>
        </div>
      </div>

      {/* 跑馬燈區域 */}
      {/* <InfiniteMarquee items={items} /> */}
    </main>
  )
}

