'use client';

import { Alert } from '@nextui-org/react';
import NextLink from 'next/link';

export function NoticeBanner() {
  return (
    <Alert
      color="primary"
      variant="flat"
      className="rounded-none border-b border-primary/20 text-sm text-slate-900"
      title="三河エリア限定・第1期メンバー募集中"
      description={
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span>11月スタートの公開セミナーの優先案内をお届けします。</span>
          <NextLink
            href="#contact"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            今すぐ登録する
          </NextLink>
        </div>
      }
    />
  );
}
