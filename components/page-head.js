import Head from "next/head"

export default function PageHead(props){
  return(
    <>
      <Head>
        <title>{props.titleHead}</title>
        <link rel="icon" href="/assets/img/logo.png" />
      </Head>
    </>
  )
}