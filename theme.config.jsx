export default {
  logo: <span onclick={() => location.pathname = '/'}>Kettu</span>,

  head: (
    <>
      <title>Kettu Docs</title>
      <meta name="description" content="Kettu's documentation covers everything you need to know to use Kettu, including details about every command and guides for Kettu's features."></meta>

      {/* <link rel="icon" type="image/png" sizes="32x32" href=""></link> */}
      {/* <link rel="icon" type="image/png" sizes="16x16" href=""></link> */}

      <meta name="og:title" content="Kettu Docs"></meta>
      <meta name="og:description" content="Kettu's documentation covers everything you need to know to use Kettu, including details about every command and guides for Kettu's features."></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:locale" content="en_US"></meta>
      <meta property="og:site_name" content="Kettu"></meta>
      {/* <meta property="og:image" content=""></meta> */}
    </>
  ),

  feedback: { content: null },
  editLink: { component: null },
}
