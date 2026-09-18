"use client";

import { FormEvent, useMemo, useState } from "react";

const permissions = "274878221376";

function DiscordMark() {
  return <svg aria-hidden="true" className="discord-mark" viewBox="0 0 64 64" fill="none"><path d="M51.4 13.7A43.2 43.2 0 0 0 40.6 10l-1.3 2.7a39.7 39.7 0 0 0-14.6 0L23.4 10a43.5 43.5 0 0 0-10.8 3.7C5.7 24 3.8 34 4.7 43.8a43.4 43.4 0 0 0 13.2 6.7l3.2-4.4a25.6 25.6 0 0 1-5.1-2.5l1.2-.9c9.8 4.5 20.4 4.5 30.1 0l1.2.9c-1.6 1-3.3 1.8-5.1 2.5l3.2 4.4a43.2 43.2 0 0 0 13.2-6.7c1-11.4-1.7-21.3-8.4-30.1Z" fill="currentColor"/><path d="M24.1 38.8c-2.6 0-4.7-2.4-4.7-5.3s2.1-5.3 4.7-5.3 4.7 2.4 4.7 5.3-2.1 5.3-4.7 5.3Zm15.8 0c-2.6 0-4.7-2.4-4.7-5.3s2.1-5.3 4.7-5.3 4.7 2.4 4.7 5.3-2.1 5.3-4.7 5.3Z" fill="#15172A"/></svg>;
}

export default function Home() {
  const [clientId, setClientId] = useState("");
  const [copied, setCopied] = useState(false);
  const inviteUrl = useMemo(() => clientId.trim() ? `https://discord.com/oauth2/authorize?client_id=${encodeURIComponent(clientId.trim())}&permissions=${permissions}&integration_type=0&scope=bot%20applications.commands` : "", [clientId]);
  function createInvite(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (inviteUrl) window.open(inviteUrl, "_blank", "noopener,noreferrer"); }
  async function copyLink() { if (!inviteUrl) return; await navigator.clipboard.writeText(inviteUrl); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }

  return <main>
    <div className="aurora aurora-one"/><div className="aurora aurora-two"/>
    <nav aria-label="เมนูหลัก" className="nav-shell"><a className="brand" href="#top" aria-label="Alren-Bot หน้าแรก"><span className="brand-orb"><span/></span><span>ALREN<span className="brand-dash">—</span>BOT</span></a><a className="nav-link" href="#invite">เชิญบอท</a></nav>
    <section id="top" className="hero">
      <div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> ONLINE · พร้อมเข้าสู่เซิร์ฟเวอร์</div><h1>คู่หูที่ทำให้<br/><em>ทุกเซิร์ฟเวอร์</em><br/>ลื่นไหลขึ้น</h1><p className="intro">Alren-Bot ช่วยดูแลชุมชน จัดการคำสั่ง และทำให้งานประจำวันของคุณเบาขึ้นในที่เดียว</p><a className="primary-button" href="#invite"><DiscordMark/><span>เชิญ Alren-Bot</span><span className="button-arrow">↗</span></a><p className="microcopy">ใช้งานผ่าน Discord · คุณเลือกเซิร์ฟเวอร์ได้เอง</p></div>
      <div className="bot-stage" aria-label="Alren-Bot"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="spark spark-a"/><div className="spark spark-b"/><div className="spark spark-c"/><div className="bot-card"><div className="bot-header"><span className="tiny-label">ALREN-BOT</span><span className="signal"><i/><i/><i/></span></div><div className="bot-face"><div className="ear left-ear"/><div className="ear right-ear"/><div className="face-screen"><span className="eye"/><span className="eye"/><span className="mouth"/></div></div><div className="bot-footer"><span>STATUS</span><b>READY</b></div></div><div className="floating-chip chip-one">/help <span>↵</span></div><div className="floating-chip chip-two"><span className="chip-dot"/> all systems go</div></div>
    </section>
    <section id="invite" className="invite-section" aria-labelledby="invite-heading"><div className="section-number">01 / INVITE</div><div className="invite-grid"><div><h2 id="invite-heading">เริ่มต้นใน<br/><span>ไม่กี่วินาที</span></h2><p>วาง Application ID ของ Alren-Bot เพื่อสร้างลิงก์เชิญที่พร้อมใช้งาน แล้วเลือกเซิร์ฟเวอร์ที่คุณมีสิทธิ์จัดการ</p></div><form className="invite-panel" onSubmit={createInvite}><label htmlFor="client-id">Discord Application ID</label><div className="input-wrap"><span className="hash">#</span><input id="client-id" inputMode="numeric" placeholder="วาง Client ID ของบอท" value={clientId} onChange={(event) => setClientId(event.target.value.replace(/\D/g, ""))} aria-describedby="invite-hint"/></div><p id="invite-hint" className="input-hint">ID นี้อยู่ใน Discord Developer Portal → General Information</p><div className="panel-actions"><button className="invite-button" type="submit" disabled={!inviteUrl}>เปิดลิงก์เชิญ <span>↗</span></button><button className="copy-button" type="button" onClick={copyLink} disabled={!inviteUrl}>{copied ? "คัดลอกแล้ว" : "คัดลอกลิงก์"}</button></div></form></div></section>
    <footer><span>ALREN-BOT</span><span>DESIGNED FOR YOUR COMMUNITY</span></footer>
  </main>;
}
