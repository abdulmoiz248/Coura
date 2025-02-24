"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Loader2, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

export function BookCallModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log(values)
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => {
      setOpen(false)
      setIsSuccess(false)
      form.reset()
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999]"
          >
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
            <div className="fixed inset-0 z-[1000] overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative w-full max-w-[500px] overflow-hidden rounded-xl border bg-background/95 p-6 shadow-lg"
                >
               
                  <DialogHeader>
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} custom={0}>
                      <DialogTitle className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF] text-2xl font-bold ">
                        Book a Live Call
                      </DialogTitle>
                    </motion.div>
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} custom={1}>
                      <DialogDescription className="text-base">
                        Fill out the form below and we&apos;ll get back to you shortly.
                      </DialogDescription>
                    </motion.div>
                  </DialogHeader>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-6">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        custom={2}
                        className="grid gap-5 sm:grid-cols-2"
                      >
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John Doe"
                                  {...field}
                                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 text-white"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john@example.com"
                                  {...field}
                                  className="transition-all text-white duration-300 focus:ring-2 focus:ring-primary/20 bg-background/50 backdrop-blur-sm"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        custom={3}
                        className="grid gap-5 sm:grid-cols-2"
                      >
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="(+92) 123-4567"
                                  {...field}
                                  className="transition-all text-white duration-300 focus:ring-2 focus:ring-primary/20 bg-background/50 backdrop-blur-sm"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Acme Inc."
                                  {...field}
                                  className="transition-all text-white duration-300 focus:ring-2 focus:ring-primary/20 bg-background/50 backdrop-blur-sm"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div initial="hidden" animate="visible" variants={fadeIn} custom={4}>
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your project..."
                                  {...field}
                                  className="min-h-[120px] text-white transition-all duration-300 focus:ring-2 focus:ring-primary/20 bg-background/50 backdrop-blur-sm"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        custom={5}
                        className="flex justify-end gap-4 pt-2"
                      >
                        <Button
                          variant="outline"
                          onClick={() => setOpen(false)}
                          type="button"
                          className="transition-all text-white duration-300 hover:bg-background/80"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="relative min-w-[120px] transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : isSuccess ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="flex items-center gap-2"
                            >
                              <Check className="h-4 w-4" />
                              <span>Sent!</span>
                            </motion.div>
                          ) : (
                            "Submit"
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Dialog>
  )
}

