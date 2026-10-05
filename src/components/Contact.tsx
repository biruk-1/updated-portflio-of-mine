import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const { toast } = useToast();
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or email me directly.",
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
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
        >
          <p className="section-label">05 — Contact</p>
          <h2 className="section-title">Let's talk</h2>
          <p className="section-lede">
            Open to full-time roles and selective freelance projects. Include
            context, timeline, and how to reach you.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.dl
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35 }}
            className="space-y-6"
          >
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href="mailto:birukchali86@gmail.com"
                  className="text-sm font-medium text-foreground hover:underline underline-offset-4"
                >
                  birukchali86@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Phone
              </dt>
              <dd className="mt-2">
                <a
                  href="tel:+251940675703"
                  className="text-sm font-medium text-foreground hover:underline underline-offset-4"
                >
                  +251-940-675-703
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Location
              </dt>
              <dd className="mt-2 text-sm font-medium text-foreground">
                Adama, Ethiopia · UTC+3
              </dd>
            </div>
          </motion.dl>

          <motion.form
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: 0.04 }}
            onSubmit={handleSubmit}
            className="surface space-y-5 p-5 sm:p-7"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="jane@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Role, project context, timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-background resize-none"
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" strokeWidth={1.75} />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
