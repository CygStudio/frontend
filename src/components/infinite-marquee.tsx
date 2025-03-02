"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface MarqueeItem {
  id: number
  avatar: string
  username: string
  content: string
  decoration: string
}

interface InfiniteMarqueeProps {
  items: MarqueeItem[]
}

export default function InfiniteMarquee({ items }: InfiniteMarqueeProps) {
  const [firstHalf, setFirstHalf] = useState<MarqueeItem[]>([])
  const [secondHalf, setSecondHalf] = useState<MarqueeItem[]>([])
  const [isPaused, setIsPaused] = useState(false)

  // 將資料陣列分成兩半，確保不重複
  useEffect(() => {
    if (items.length > 0) {
      const mid = Math.ceil(items.length / 2)
      setFirstHalf(items.slice(0, mid))
      setSecondHalf(items.slice(mid))
    }
  }, [items])

  return (
    <div className="w-full h-screen relative">
      {/* 桌面版和平板版：兩個跑馬燈 */}
      <div className="hidden md:flex flex-col h-full">
        {/* 桌面版：左側留空 */}
        <div className="flex h-full lg:ml-[33%]">
          {/* 左側跑馬燈（向上滾動） */}
          <div
            className="w-1/2 h-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex flex-col gap-4 py-4"
              animate={{ y: isPaused ? 0 : "-50%" }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              {/* 第一組卡片 */}
              {firstHalf.map((item) => (
                <MessageCard key={item.id} item={item} />
              ))}
              {/* 重複第一組卡片以實現無限滾動 */}
              {firstHalf.map((item) => (
                <MessageCard key={`repeat-${item.id}`} item={item} />
              ))}
            </motion.div>
          </div>

          {/* 右側跑馬燈（向下滾動） */}
          <div
            className="w-1/2 h-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex flex-col gap-4 py-4"
              animate={{ y: isPaused ? 0 : "50%" }}
              initial={{ y: "-50%" }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              {/* 第二組卡片 */}
              {secondHalf.map((item) => (
                <MessageCard key={item.id} item={item} />
              ))}
              {/* 重複第二組卡片以實現無限滾動 */}
              {secondHalf.map((item) => (
                <MessageCard key={`repeat-${item.id}`} item={item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* 手機版：單一跑馬燈 */}
      <div
        className="md:hidden w-full h-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex flex-col gap-4 py-4"
          animate={{ y: isPaused ? 0 : "-50%" }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          {/* 所有卡片 */}
          {items.map((item) => (
            <MessageCard key={item.id} item={item} />
          ))}
          {/* 重複所有卡片以實現無限滾動 */}
          {items.map((item) => (
            <MessageCard key={`repeat-${item.id}`} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

// 訊息卡片元件
function MessageCard({ item }: { item: MarqueeItem }) {
  return (
    <div className="relative flex flex-col mx-4 mb-12 max-w-md">
      {/* 上方鳥圖片 */}
      <div className="relative z-10 mb-[-20px]">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bird-uMeboskQJZqMa0GJkAEbQIyZ4U0eUN.png"
          alt="Bird"
          className="w-40 h-auto mx-auto"
        />
      </div>

      {/* 對話框 */}
      <div className="relative">
        <div className="bg-white rounded-3xl border-4 border-rose-500 p-6 pt-8 min-h-[180px] flex items-center justify-center">
          <p className="text-sm whitespace-pre-wrap">{item.content}</p>

          {/* 右下角金蛋 */}
          <div className="absolute bottom-[-15px] right-[-15px]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/egg-ZNh8BDSzLiA3qRXkxVlw3EGaobA5iM.png"
              alt="Golden Eggs"
              className="w-16 h-auto"
            />
          </div>
        </div>
      </div>

      {/* 底部用戶資訊 */}
      <div className="flex items-center mt-4 ml-4">
        {/* 頭像 - 使用 div 而非 Image 元件 */}
        <div className="w-12 h-12 rounded-full bg-pink-300 flex items-center justify-center mr-3">
          <span className="text-pink-600 text-xs">頭像</span>
        </div>

        {/* 用戶名 */}
        <div className="text-xl font-bold text-black">{item.username}</div>
      </div>
    </div>
  )
}

