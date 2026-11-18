"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Documents() {
  const [activeDoc, setActiveDoc] = useState<string | null>("api");

  const docs = [
    { id: "dev", title: "Developer Community", status: "Access Restricted", type: "PORTAL" },
    { id: "api", title: "API Documentation", status: "v2.0.1 Stable", type: "PDF / MD" },
    { id: "trust", title: "Trust Center", status: "Verified 2026", type: "SECURITY" },
    { id: "privacy", title: "Privacy Policy", status: "Active", type: "LEGAL" },
    { id: "terms", title: "Terms of Use", status: "Active", type: "LEGAL" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col pt-24 font-sans">
      <Navbar />
      
      <div className="max-w-[1400px] mx-auto px-8 py-20 w-full flex-grow flex flex-col lg:flex-row gap-12">
        
        {/* Left Sidebar: Document Index */}
        <div className="w-full lg:w-1/3">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Documentation</h1>
          <p className="text-sm text-zinc-400 font-light mb-12">
            System policies, protocol specifications, and operational directives for the Abstract ecosystem.
          </p>

          <div className="w-full border border-zinc-800 rounded-none overflow-hidden bg-[#111111]">
            <div className="flex justify-between p-4 border-b border-zinc-800 bg-zinc-900/50 font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
              <span>Document Index</span>
              <span>Status</span>
            </div>
            
            {docs.map((doc) => (
              <div 
                key={doc.id} 
                onClick={() => doc.id !== "dev" ? setActiveDoc(doc.id) : null}
                className={`flex justify-between p-4 border-b border-zinc-800/50 transition-colors ${doc.id === "dev" ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${activeDoc === doc.id ? "bg-zinc-800/50 border-l-2 border-l-white" : "hover:bg-zinc-800/20 border-l-2 border-l-transparent"}`}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{doc.title}</span>
                  <span className="text-[10px] font-mono text-zinc-500 mt-1">{doc.type}</span>
                </div>
                <div className="text-right text-xs font-mono flex items-center">
                  <span className={doc.status.includes("Restricted") ? "text-red-500" : "text-emerald-500"}>
                    {doc.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel: Content Reader */}
        <div className="w-full lg:w-2/3 border border-zinc-800 bg-[#0c0c0c] p-8 md:p-12 min-h-[600px]">
          
          {/* API DOCUMENTATION */}
          {activeDoc === "api" && (
            <div className="animate-in fade-in duration-500 text-sm font-light text-zinc-300 space-y-8">
              <div className="border-b border-zinc-800 pb-6 mb-8">
                <h2 className="text-3xl text-white font-medium tracking-tight mb-2">Abstract Energy: API Documentation</h2>
                <p className="font-mono text-xs text-emerald-500 uppercase tracking-widest">Version 2.0.1 Stable</p>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-3">Overview</h3>
                <p className="leading-relaxed">The Abstract Energy API provides a secure, low-latency interface for integrating real-time Measurement & Verification (M&V) telemetry, HVAC motor specifications, and BESS (Battery Energy Storage System) analytics into your existing institutional grids.</p>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-3">Authentication</h3>
                <p className="leading-relaxed mb-3">All requests require an API key passed via the Authorization header using Bearer tokens.</p>
                <code className="block bg-black border border-zinc-800 p-3 font-mono text-emerald-400 text-xs">Authorization: Bearer ae_live_xxxxxxxxxxxxxxxxx</code>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-4">Core Endpoints</h3>
                <div className="overflow-x-auto border border-zinc-800">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-zinc-900/50 text-zinc-400 uppercase tracking-widest border-b border-zinc-800">
                      <tr>
                        <th className="p-4">Endpoint</th>
                        <th className="p-4">Method</th>
                        <th className="p-4">Description</th>
                        <th className="p-4">Rate Limit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      <tr><td className="p-4 text-emerald-400">/v2/telemetry/ingest</td><td className="p-4 text-white">POST</td><td className="p-4 text-sans font-light">Pushes real-time VFD & fan CFM analysis data.</td><td className="p-4">500 req/sec</td></tr>
                      <tr><td className="p-4 text-emerald-400">/v2/audits/baseline</td><td className="p-4 text-white">GET</td><td className="p-4 text-sans font-light">Retrieves automated baseline modeling for IGA audits.</td><td className="p-4">100 req/sec</td></tr>
                      <tr><td className="p-4 text-emerald-400">/v2/hvac/faults</td><td className="p-4 text-white">GET</td><td className="p-4 text-sans font-light">Fetches active thermal anomalies and chiller plant faults detected by OK3YO.</td><td className="p-4">50 req/sec</td></tr>
                      <tr><td className="p-4 text-emerald-400">/v2/grid/predict</td><td className="p-4 text-white">POST</td><td className="p-4 text-sans font-light">Submits local grid parameters to the VoltShield engine for blackout prediction.</td><td className="p-4">10 req/sec</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-4">Example Payload: Telemetry Ingest</h3>
                <pre className="bg-black border border-zinc-800 p-6 font-mono text-emerald-400 text-xs overflow-x-auto">
{`{
  "module": "VFD",
  "timestamp": "2026-11-18T09:33:00Z",
  "coordinates": {
    "lat": -1.2921,
    "lng": 36.8219
  },
  "metrics": {
    "cfm_fluctuation": 4.2,
    "motor_speed_hz": 48.5,
    "power_draw_kw": 12.1
  }
}`}
                </pre>
              </div>
            </div>
          )}

          {/* TRUST CENTER */}
          {activeDoc === "trust" && (
            <div className="animate-in fade-in duration-500 text-sm font-light text-zinc-300 space-y-8">
              <div className="border-b border-zinc-800 pb-6 mb-8">
                <h2 className="text-3xl text-white font-medium tracking-tight mb-2">Abstract Energy: Trust Center</h2>
                <p className="font-mono text-xs text-emerald-500 uppercase tracking-widest">Security Verified 2026</p>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-3">Commitment to Institutional Energy Superiority</h3>
                <p className="leading-relaxed">Abstract Energy operates on the principle of immutable, cryptographic verification for all physical infrastructure data. Our Trust Center outlines the security architectures protecting your commercial property tracking and efficiency incentive compliance data.</p>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-4">Security & Cryptographic Architecture</h3>
                <div className="overflow-x-auto border border-zinc-800">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-900/50 text-zinc-400 font-mono text-xs uppercase tracking-widest border-b border-zinc-800">
                      <tr>
                        <th className="p-4">Security Layer</th>
                        <th className="p-4">Implementation</th>
                        <th className="p-4">Protocol</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      <tr><td className="p-4 text-white font-medium">Data in Transit</td><td className="p-4">TLS 1.3 encryption across all telemetry ingestion endpoints and user portals.</td><td className="p-4 font-mono text-xs text-zinc-500">Network Level</td></tr>
                      <tr><td className="p-4 text-white font-medium">Data at Rest</td><td className="p-4">AES-256 encryption for all PostGIS spatial databases and facility metrics.</td><td className="p-4 font-mono text-xs text-zinc-500">Storage Level</td></tr>
                      <tr><td className="p-4 text-white font-medium">Data Immutability</td><td className="p-4">Merkle logging applied to M&V ledgers to ensure verifiable audit trails for Option B & C compliance.</td><td className="p-4 font-mono text-xs text-emerald-500">Blockchain / DePIN</td></tr>
                      <tr><td className="p-4 text-white font-medium">Access Control</td><td className="p-4">Role-Based Access Control (RBAC) with mandatory MFA for all platform engineers and facility managers.</td><td className="p-4 font-mono text-xs text-zinc-500">Identity Level</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg text-white font-medium mb-3">Compliance & Auditing</h3>
                <ul className="list-disc pl-5 space-y-3">
                  <li><strong className="text-white">IPMVP Alignment:</strong> All measurement and verification data pipelines are mathematically structured to comply directly with the International Performance Measurement and Verification Protocol (Option B and Option C).</li>
                  <li><strong className="text-white">Continuous Monitoring:</strong> Threat detection is handled by our internal Matrix pipelines, identifying anomalous data payloads or unauthorized access attempts in real-time.</li>
                  <li><strong className="text-white">Incident Response:</strong> Automated isolation of affected modules (e.g., disconnecting a compromised HVAC node from the broader telemetry network) occurs within &lt; 50 milliseconds of threat validation.</li>
                </ul>
              </div>
            </div>
          )}

          {/* PRIVACY POLICY */}
          {activeDoc === "privacy" && (
            <div className="animate-in fade-in duration-500 text-sm font-light text-zinc-300 space-y-8">
               <div className="border-b border-zinc-800 pb-6 mb-8">
                <h2 className="text-3xl text-white font-medium tracking-tight mb-2">Privacy Policy</h2>
                <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Effective Date: November 2026</p>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-3">1. Information We Collect</h3>
                <p className="mb-3">We collect technical and operational data to facilitate advanced energy audits, measurement and verification analysis, and geospatial visualization.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Facility Data:</strong> HVAC motor specifications, chiller plant staging data, and real-time Variable Frequency Drive (VFD) speeds.</li>
                  <li><strong>Geospatial Data:</strong> Longitude and latitude metrics for mapping distributed energy resources and BESS grid locations.</li>
                  <li><strong>Account Data:</strong> Names, professional emails, and organizational affiliations required for accessing the Abstract Energy portal.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-3">2. How We Use Your Information</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>To automate baseline modeling and generate institutional compliance scoring.</li>
                  <li>To coordinate decentralized physical infrastructure via cryptographic AI modeling.</li>
                  <li>To route facility inquiries through our specialized AI evaluation agents (such as OK3YO) for instant fault detection.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-3">3. Data Processing and Storage</h3>
                <p className="leading-relaxed">Your data is processed using secure, isolated cloud environments. Telemetry data from hardware and IoT prototypes (including real-time energy monitoring systems) is aggregated and stripped of personally identifiable information before being used to train or evaluate energy optimization algorithms.</p>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-3">4. Data Sharing and Jurisdiction</h3>
                <p className="leading-relaxed">We do not sell facility telemetry or user data to third parties. Data is only shared with authorized incentive providers (such as designated multi-family energy efficiency programs) when you explicitly authorize the release of M&V ledgers for compliance reporting. This policy complies with the Kenya Data Protection Act and relevant international frameworks.</p>
              </div>
            </div>
          )}

          {/* TERMS OF USE */}
          {activeDoc === "terms" && (
            <div className="animate-in fade-in duration-500 text-sm font-light text-zinc-300 space-y-8">
               <div className="border-b border-zinc-800 pb-6 mb-8">
                <h2 className="text-3xl text-white font-medium tracking-tight mb-2">Terms of Use</h2>
                <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Effective Date: November 2026</p>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-2">1. Acceptance of Terms</h3>
                <p className="leading-relaxed">By accessing energy.mauriceokeyo.com and utilizing the Abstract Energy platform (including OK3YO, MATRIX, PORTAL, VOLT, and SPATIAL modules), you agree to be bound by these Terms of Use.</p>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-2">2. Scope of Services</h3>
                <p className="leading-relaxed">Abstract Energy provides an ontology-powered telemetry software platform for real-time commercial property tracking. The platform integrates hardware simulations, AI orchestration, and spatial databases to analyze energy data.</p>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-4">3. Acceptable Use Guidelines</h3>
                <div className="overflow-x-auto border border-zinc-800">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-900/50 text-zinc-400 font-mono text-xs uppercase tracking-widest border-b border-zinc-800">
                      <tr>
                        <th className="p-4 border-r border-zinc-800 text-emerald-500">✅ Permitted Activities</th>
                        <th className="p-4 text-red-500">❌ Prohibited Activities</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      <tr>
                        <td className="p-4 border-r border-zinc-800">Connecting authorized facility sensors to our ingestion APIs.</td>
                        <td className="p-4">Reverse-engineering the OK3YO HVAC neural agents.</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-r border-zinc-800">Downloading generated M&V ledgers for institutional reporting.</td>
                        <td className="p-4">Simulating artificial node data to manipulate incentive compliance scoring.</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-r border-zinc-800">Utilizing the provided spatial architectural simulations for grid reliability planning.</td>
                        <td className="p-4">Attempting to bypass cryptographic Phase-Balancing limits on the VOLT module.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-2">4. Intellectual Property</h3>
                <p className="leading-relaxed">All software tools, automation scripts, AI agents, and web application architectures provided on this platform are the exclusive property of Abstract Corp. You are granted a limited, non-exclusive, non-transferable license to use the platform for its intended operational purposes.</p>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-2">5. Limitation of Liability</h3>
                <p className="leading-relaxed">While our predictive models (including blackout prediction and thermal optimization) utilize advanced machine learning and real-time telemetry, they are provided "as-is." Abstract Energy is not liable for physical hardware failures, grid blackouts, or discrepancies in third-party incentive payouts.</p>
              </div>

              <div>
                <h3 className="text-lg text-white font-medium mb-2">6. Governing Law</h3>
                <p className="leading-relaxed">These terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions. Any disputes arising from the use of the platform shall be resolved in the recognized courts of Nairobi.</p>
              </div>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}