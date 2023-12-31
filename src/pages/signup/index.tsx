import Head from "next/head";

import styles from '@/pages/signup/index.module.css'
import { InputForm } from "@/components/ui/InputForm";
import { useState } from "react";

export default function index() {
  // user情報を配列として保持する

  // 各種必要なデータをプロパティとして持つ

  return (
    <>
      <Head>
        <title>SignUp</title>
        <meta name="description" content="Generated by SignUp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.sign_up}>
        <InputForm />
      </div>
    </>
  )
}