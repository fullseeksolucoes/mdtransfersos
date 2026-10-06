'use client';

import type { ComponentProps } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SectionLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: `#${string}`;
};

/**
 * Âncora para uma seção da landing page. Na home e nas páginas de cidade
 * (que contêm as seções) rola na própria página; nas demais (ex.: 404)
 * leva para a seção na home.
 */
export default function SectionLink({ href, ...props }: SectionLinkProps) {
  const pathname = usePathname();
  const hasSections = pathname === '/' || pathname.startsWith('/cidade/');

  return <Link href={hasSections ? href : `/${href}`} {...props} />;
}
