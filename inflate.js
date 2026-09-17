
async function inflatePage(id){
  const r=await fetch('/payloads/'+id+'.json');
  const {b64}=await r.json();
  const bin=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
  const html=await new Response(new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'))).text();
  document.open();document.write(html);document.close();
}
