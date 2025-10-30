import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "birukchali86@gmail.com",
      href: "mailto:birukchali86@gmail.com",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251-940-675-703",
      href: "tel:+251940675703",
      gradient: "from-secondary to-accent",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Adama, Ethiopia",
      href: null,
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden bg-muted/30">
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-6xl">📬</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's create something amazing together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Let's talk about your project</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Currently freelancing on Upwork and always excited to hear about new projects.
                  Whether you need a mobile app, web application, or technical consultation,
                  I'm here to help bring your ideas to life!
                </p>
                <div className="flex gap-2 pt-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  <div className="w-12 h-1 bg-gradient-to-r from-secondary to-accent rounded-full" />
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-5 glass-effect border-border hover:border-primary/50 transition-all duration-300 group">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 glow-effect`}
                        >
                          <item.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm text-muted-foreground mb-1 font-medium">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-semibold group-hover:text-primary transition-colors truncate block text-lg"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-semibold truncate text-lg">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Animated Decoration */}
              <motion.div
                className="hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-40">
                  <motion.div
                    className="absolute top-0 left-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary glow-effect"
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                  />
                  <motion.div
                    className="absolute top-10 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent glow-effect-secondary"
                    animate={{
                      y: [0, 20, 0],
                      x: [0, -20, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-1/3 w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary glow-effect"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 glass-effect border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, timeline, and budget..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={6}
                      className="bg-background border-border focus:border-primary transition-colors resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button
                      type="submit"
                      className="w-full font-semibold text-lg h-12 bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-2xl hover:shadow-primary/50 transition-all group"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          ⚡
                        </motion.div>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
