import { motion } from "framer-motion";

import { ExternalLink } from "./ExternalLink";

export function Footer() {
  return (
    <motion.footer
      transition={{ delay: 0.5, duration: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-md flex select-none flex-col items-center gap-4 pb-10 text-violet-500 sm:flex-row sm:gap-6 sm:pb-0"
    >
      <span>
        Rooted 🌿 by{" "}
        <ExternalLink href="https://github.com/pratikbhavarthe">Pratik</ExternalLink>
      </span>
      <span className="hidden sm:block">·</span>
    </motion.footer>
  );
}
