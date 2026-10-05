import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const { toast } = useToast();
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_lhy77gp";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_yusmg3x";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "7tddNPOadYV9KigoR";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "birukchali86@gmail.com",
        },
        publicKey
      );
      toast({
        title: "Message sent",
        description: "Thanks — I'll reply soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send",
        description: "Try again later or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad border-t border-border">
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16"
        >
          <div>
            <p className="section-label">05 / contact</p>
            <h2 className="section-title max-w-sm">
              Start a conversation
            </h2>
            <p className="section-lede">
              Open to full-time roles and selective freelance. Send context,
              timeline, and how to reach you.
            </p>

            <div className="mt-10 space-y-5 border-t border-border pt-8">
              <div>
                <p className="meta">email</p>
                <a
                  href="mailto:birukchali86@gmail.com"
                  className="mt-2 inline-flex items-center gap-1 text-base font-medium hover:text-primary transition-colors"
                >
                  birukchali86@gmail.com
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </a>
              </div>
              <div>
                <p className="meta">phone</p>
                <a
                  href="tel:+251940675703"
                  className="mt-2 inline-block text-base font-medium hover:text-primary transition-colors"
                >
                  +251-940-675-703
                </a>
              </div>
              <div>
                <p className="meta">location</p>
                <p className="mt-2 text-base font-medium">Addis Ababa, Ethiopia · UTC+3</p>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="signal-dot" />
                <span className="meta">status: accepting opportunities</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="surface p-5 sm:p-7 space-y-5">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="meta">new_message</span>
              <span className="meta">required *</span>
            </div>

            <div>
              <label htmlFor="name" className="meta mb-2 block">
                name *
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Jane Doe"
                className="bg-background"
              />
            </div>
            <div>
              <label htmlFor="email" className="meta mb-2 block">
                email *
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="jane@company.com"
                className="bg-background"
              />
            </div>
            <div>
              <label htmlFor="message" className="meta mb-2 block">
                message *
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                placeholder="Role, project context, timeline..."
                className="resize-none bg-background"
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" strokeWidth={1.75} />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
