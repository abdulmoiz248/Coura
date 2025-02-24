
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
export function ServiceCard({
    icon,
    title,
    description,
  }: {
    icon: React.ReactNode
    title: string
    description: string
  }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="bg-slate-900/50 border-slate-800">
          <CardContent className="p-6 space-y-4">
            <div className="p-3 bg-slate-800/50 w-fit rounded-lg">{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-slate-300">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    )
  }
  