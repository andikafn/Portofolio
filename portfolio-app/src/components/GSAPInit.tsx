"use client";

import { useEffect } from "react";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";

export default function GSAPInit() {
  useGSAPAnimations();
  return null;
}
