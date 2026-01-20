import React from 'react';
import { SlideData } from './types';
import { Terminal, Cpu, Server, Heart, Layers, Package, Globe, MessageSquare, FolderTree } from 'lucide-react';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    title: "1: Title Page",
    notesPrompt: "Introduce yourself as a computer science student who loves Arch Linux. Introduce the topic: A comparison between Windows and Linux operating systems.",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
        <pre className="text-blue-400 text-sm sm:text-base leading-none font-bold">
{`
      /\\
     /  \\
    /    \\
   /      \\
  /   ,,   \\
 /   |  |   \\
/_-''    ''-_\\
`}
        </pre>
        <h1 className="text-5xl font-bold text-white tracking-tighter">
          OS_COMPARISON_PROJECT<span className="animate-pulse">_</span>
        </h1>
        <div className="text-gray-300 text-xl border-2 border-gray-600 p-8 bg-gray-900 w-full max-w-3xl shadow-lg">
          <p className="mb-2"><span className="text-blue-400 font-bold">USER:</span> Iona Iobidze</p>
          <p className="mb-2"><span className="text-blue-400 font-bold">COURSE:</span> System Management Essentials - Windows and Linux</p>
          <p className="mb-2"><span className="text-blue-400 font-bold">DATE:</span> {new Date().toLocaleDateString()}</p>
          <p><span className="text-blue-400 font-bold">THEME:</span> Arch Linux / i3wm</p>
        </div>
        <p className="text-lg text-gray-500 font-mono mt-8">Use Arrow Keys or Click Tabs to Navigate</p>
      </div>
    ),
  },
  {
    id: 2,
    title: "2: Overview",
    notesPrompt: "Briefly outline the key technical differences before diving deeper. Mention Kernel, File System, and Software Management.",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="border border-gray-700 bg-gray-900 p-6 overflow-y-auto shadow-md">
          <h3 className="text-blue-400 font-bold text-2xl mb-6 border-b border-gray-700 pb-4 flex items-center gap-3">
            <Terminal size={24} /> LINUX (General)
          </h3>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-300 leading-relaxed">
            <li><strong className="text-white text-xl">Unix Philosophy:</strong> Built on the concept of "Everything is a file." The system is a collection of small, modular tools that do one thing well and can be piped together.</li>
            <li><strong className="text-white text-xl">Total Customizability:</strong> Users have complete control over the UI (Desktop Environments like GNOME/KDE or Window Managers like i3), the Init system (systemd, OpenRC), and background services.</li>
            <li><strong className="text-white text-xl">Open Source Nature:</strong> The kernel and most software are GPL licensed. The source code is inspectable, modifiable, and redistributable, fostering a massive community-driven ecosystem (Distros).</li>
            <li><strong className="text-white text-xl">Multi-user by Design:</strong> Built from the ground up for network capabilities and multiple concurrent users with strict permission handling (rwx).</li>
          </ul>
        </div>
        <div className="border border-gray-700 bg-gray-900 p-6 overflow-y-auto shadow-md">
          <h3 className="text-cyan-600 font-bold text-2xl mb-6 border-b border-gray-700 pb-4 flex items-center gap-3">
            <Cpu size={24} /> WINDOWS (General)
          </h3>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-300 leading-relaxed">
            <li><strong className="text-white text-xl">Integrated Philosophy:</strong> Focuses on a cohesive, unified experience where backward compatibility is paramount. It prioritizes GUI consistency over modularity.</li>
            <li><strong className="text-white text-xl">User Experience (UX):</strong> Provides a polished, locked-down interface intended to "just work" for the average consumer. The Desktop Window Manager (DWM) is tightly coupled with the OS.</li>
            <li><strong className="text-white text-xl">Proprietary Architecture:</strong> Closed source "Black Box" model. Configuration is handled centrally via the Registry (a massive hierarchical database) rather than text files.</li>
            <li><strong className="text-white text-xl">Commercial Support:</strong> Backed by Microsoft with standard enterprise management tools like Active Directory and Group Policy, making it the standard for corporate desktop environments.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "3: The Kernel",
    notesPrompt: "Explain the difference between Monolithic and Hybrid kernels. Explain why Linux's monolithic approach can be more efficient.",
    content: (
      <div className="flex flex-col h-full gap-6">
        <div className="grid grid-cols-2 gap-6 flex-1">
            <div className="bg-gray-900 border border-gray-700 p-6 flex flex-col shadow-md">
                <h3 className="text-blue-400 font-bold text-xl mb-4 flex gap-2 items-center"><Layers size={24}/> LINUX: Monolithic</h3>
                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="border-4 border-blue-600 rounded-lg p-6 text-center w-full bg-gray-800">
                        <div className="text-white font-bold text-2xl mb-4">KERNEL SPACE</div>
                        <div className="grid grid-cols-2 gap-3 text-sm sm:text-base text-black font-bold">
                            <div className="bg-blue-400 p-3 rounded">Scheduling</div>
                            <div className="bg-blue-400 p-3 rounded">File System</div>
                            <div className="bg-blue-400 p-3 rounded">Drivers</div>
                            <div className="bg-blue-400 p-3 rounded">Network</div>
                        </div>
                    </div>
                </div>
                <p className="text-base text-gray-300 mt-4 leading-relaxed">
                  <span className="text-white font-bold">High Performance:</span> Drivers and core services run in the same address space (Kernel Space) with full privileges, reducing context switching overhead.
                </p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-6 flex flex-col shadow-md">
                <h3 className="text-cyan-500 font-bold text-xl mb-4 flex gap-2 items-center"><Layers size={24}/> WINDOWS: Hybrid (NT)</h3>
                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="border-4 border-cyan-600 rounded-lg p-6 text-center w-full bg-gray-800">
                         <div className="text-white font-bold text-2xl mb-4">HYBRID CORE</div>
                         <div className="grid grid-cols-1 gap-2 text-sm sm:text-base text-black font-bold mb-3">
                            <div className="bg-cyan-300 p-3 rounded">Microkernel Core</div>
                            <div className="bg-cyan-700 p-3 rounded text-white">HAL (Hardware Abstraction)</div>
                         </div>
                         <div className="text-sm text-gray-400 border border-gray-600 p-1 rounded">User Mode Drivers</div>
                    </div>
                </div>
                <p className="text-base text-gray-300 mt-4 leading-relaxed">
                  <span className="text-white font-bold">Stability Focused:</span> Uses a Hybrid NT kernel. Subsystems (like Win32) run separately, and the HAL abstracts hardware differences.
                </p>
            </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "4: File Hierarchy",
    notesPrompt: "Contrast the Single Directory Tree of Linux with Windows Drive Letters. Discuss Case Sensitivity and Path Separators.",
    content: (
      <div className="flex flex-col h-full gap-4">
         {/* Tree Comparison */}
         <div className="grid grid-cols-2 gap-6 flex-1">
             <div className="font-mono bg-black/50 p-4 border border-green-900/50 rounded flex flex-col">
                <h3 className="text-green-400 font-bold text-xl mb-2 flex items-center gap-2">
                    <FolderTree size={20}/> LINUX (FHS)
                </h3>
                <pre className="text-gray-300 text-sm sm:text-base leading-snug flex-1 overflow-auto">
{`/ (Root)
├── bin -> usr/bin  (Links)
├── dev             (Devices)
├── etc             (Configs)
├── home            (User Data)
│   └── iona        (.config)
├── proc            (Kernel Info)
└── mnt             (Mounts)
    └── usb_drive`}
                </pre>
             </div>
             <div className="font-mono bg-black/50 p-4 border border-yellow-900/50 rounded flex flex-col">
                <h3 className="text-yellow-400 font-bold text-xl mb-2 flex items-center gap-2">
                   <FolderTree size={20}/> WINDOWS
                </h3>
                <pre className="text-gray-300 text-sm sm:text-base leading-snug flex-1 overflow-auto">
{`C:\\ (System Root)
├── Windows         (OS Core)
├── Program Files   (Apps)
├── Users           (User Data)
│   └── Iona        (AppData)
└── pagefile.sys

D:\\ (Logical Volume)
└── Games`}
                </pre>
             </div>
         </div>

         {/* Technical Nuances Table */}
         <div className="bg-gray-900 border border-gray-700 p-4 shadow-md h-auto shrink-0">
            <h4 className="text-blue-400 font-bold mb-3 text-lg border-b border-gray-700 pb-1">Technical Comparison</h4>
            <div className="grid grid-cols-3 gap-x-8 gap-y-4 text-sm">
                {/* LINUX ROW */}
                <div className="space-y-1">
                    <span className="text-green-500 font-bold text-xs uppercase tracking-wider">Separator</span>
                    <div className="flex items-center gap-2">
                        <code className="bg-gray-800 px-2 py-0.5 rounded text-green-300">/</code>
                        <span className="text-gray-300">Forward Slash</span>
                    </div>
                </div>
                <div className="space-y-1">
                    <span className="text-green-500 font-bold text-xs uppercase tracking-wider">Case Sensitivity</span>
                    <div className="text-gray-300">
                        <span className="text-green-300 font-bold">Sensitive</span>
                        <span className="text-gray-500 text-xs block">File ≠ file</span>
                    </div>
                </div>
                 <div className="space-y-1">
                    <span className="text-green-500 font-bold text-xs uppercase tracking-wider">Permissions</span>
                    <div className="text-gray-300">
                        <span className="text-green-300 font-bold">Octal (755)</span>
                        <span className="text-gray-500 text-xs block">User/Group/Other</span>
                    </div>
                </div>

                {/* WINDOWS ROW */}
                <div className="space-y-1 border-t border-gray-800 pt-2">
                     <div className="flex items-center gap-2">
                        <code className="bg-gray-800 px-2 py-0.5 rounded text-yellow-300">\</code>
                        <span className="text-gray-300">Backslash</span>
                    </div>
                </div>
                <div className="space-y-1 border-t border-gray-800 pt-2">
                    <div className="text-gray-300">
                        <span className="text-yellow-300 font-bold">Insensitive</span>
                        <span className="text-gray-500 text-xs block">File = FILE</span>
                    </div>
                </div>
                 <div className="space-y-1 border-t border-gray-800 pt-2">
                    <div className="text-gray-300">
                        <span className="text-yellow-300 font-bold">ACLs</span>
                        <span className="text-gray-500 text-xs block">Inherited Lists</span>
                    </div>
                </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 5,
    title: "5: Software Mgmt",
    notesPrompt: "Explain the ease of repositories vs searching the web for installers.",
    content: (
       <div className="flex flex-col gap-6 h-full">
          <div className="flex-1 bg-[#111] p-6 border border-green-900 rounded-lg relative shadow-md flex flex-col justify-center">
             <div className="absolute top-4 right-4 text-green-700 opacity-20"><Package size={64}/></div>
             <h3 className="text-green-500 font-bold text-2xl mb-4">LINUX: Centralized Repositories</h3>
             <div className="font-mono text-base sm:text-lg bg-black p-6 border-l-4 border-green-500 mb-4 shadow-inner">
                <span className="text-blue-400 font-bold">user@arch</span>:~$ sudo pacman -Syu firefox vlc<br/>
                <span className="text-gray-500 italic">:: Synchronizing package databases...</span><br/>
                <span className="text-gray-500 italic">:: Starting full system upgrade...</span><br/>
                <span className="text-white">installing firefox... [################] 100%</span>
             </div>
             <p className="text-lg text-gray-300">
               Software is installed from trusted, maintained repositories. One command updates the <span className="text-white font-bold">entire OS and all applications</span> simultaneously.
             </p>
          </div>

          <div className="flex-1 bg-[#111] p-6 border border-blue-900 rounded-lg relative shadow-md flex flex-col justify-center">
             <div className="absolute top-4 right-4 text-blue-700 opacity-20"><Globe size={64}/></div>
             <h3 className="text-blue-500 font-bold text-2xl mb-4">WINDOWS: Decentralized Installation</h3>
             <div className="flex gap-4 mb-4 items-center justify-center">
                <div className="bg-gray-800 p-4 text-sm font-bold text-center border border-gray-600 rounded w-1/3">
                    1. Search Web
                </div>
                <div className="text-gray-500 text-xl">→</div>
                <div className="bg-gray-800 p-4 text-sm font-bold text-center border border-gray-600 rounded w-1/3">
                    2. Download .exe / .msi
                </div>
                <div className="text-gray-500 text-xl">→</div>
                 <div className="bg-gray-800 p-4 text-sm font-bold text-center border border-gray-600 rounded w-1/3">
                    3. Installation Wizard
                </div>
             </div>
             <p className="text-lg text-gray-300">
               Updates are fragmented; each app often handles its own updates. Higher risk of downloading malware from unofficial sources.
             </p>
          </div>
       </div>
    )
  },
  {
    id: 6,
    title: "6: My Choice",
    notesPrompt: "State clearly that you choose Linux, specifically Arch Linux. Explain why: Rolling release model, the AUR (Arch User Repository), total control over the system, and tiling window managers like i3 make you more productive.",
    content: (
      <div className="flex flex-col h-full space-y-6">
        <div className="flex-1 border-2 border-blue-500/30 bg-gray-800/50 p-8 flex flex-col justify-center items-center relative overflow-hidden shadow-xl">
             <div className="absolute top-0 left-0 w-full h-2 bg-blue-500"></div>
             <Heart className="text-red-500 mb-6 animate-pulse" size={64} />
             <h2 className="text-4xl font-bold mb-8 text-white">CHOICE: LINUX (ARCH)</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                <div className="bg-gray-900 p-6 border border-gray-600 hover:border-blue-400 transition-colors group">
                    <h4 className="font-bold text-blue-300 text-xl mb-3 group-hover:text-blue-200">Rolling Release</h4>
                    <p className="text-base text-gray-300">Bleeding edge software access. Install once, update forever. Never deal with a "major version" reinstall again.</p>
                </div>
                <div className="bg-gray-900 p-6 border border-gray-600 hover:border-blue-400 transition-colors group">
                    <h4 className="font-bold text-blue-300 text-xl mb-3 group-hover:text-blue-200">The AUR</h4>
                    <p className="text-base text-gray-300">Arch User Repository. The largest software library in existence. If it runs on Linux, it is in the AUR.</p>
                </div>
                <div className="bg-gray-900 p-6 border border-gray-600 hover:border-blue-400 transition-colors group">
                    <h4 className="font-bold text-blue-300 text-xl mb-3 group-hover:text-blue-200">Efficiency (i3wm)</h4>
                    <p className="text-base text-gray-300">Keyboard-driven workflow. No wasted screen space with decorations. Minimal resource usage (&lt;500MB RAM).</p>
                </div>
             </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "7: Conclusion",
    notesPrompt: "Summarize where you would use Linux (Servers, Development, Hacking, Daily Driver for power users) vs Windows (Gaming, Corporate environments). End with a strong statement about Linux supremacy.",
    content: (
      <div className="grid grid-rows-2 h-full gap-6">
         <div className="border border-gray-700 bg-gray-900 p-6 shadow-md">
            <h3 className="text-2xl text-yellow-400 font-bold mb-6 flex items-center gap-3"><Server size={28}/> Usage Scenarios</h3>
            <div className="grid grid-cols-2 gap-8 h-full">
                <div>
                    <strong className="text-white text-xl block mb-4 border-b border-gray-600 pb-2">Linux is Best For:</strong>
                    <ul className="list-square pl-5 text-lg text-gray-300 space-y-3">
                        <li>Server Infrastructure & Cloud (AWS/Azure)</li>
                        <li>Software Development, DevOps, Docker</li>
                        <li>Cybersecurity, Pentesting (Kali/BlackArch)</li>
                        <li>Embedded Systems & IoT</li>
                    </ul>
                </div>
                <div>
                    <strong className="text-white text-xl block mb-4 border-b border-gray-600 pb-2">Windows is Best For:</strong>
                    <ul className="list-square pl-5 text-lg text-gray-300 space-y-3">
                        <li>Legacy Corporate Environments (Office Suite)</li>
                        <li>PC Gaming (DirectX exclusivity)</li>
                        <li>Creative Professionals dependent on Adobe</li>
                    </ul>
                </div>
            </div>
         </div>
         <div className="border border-gray-700 bg-gray-900 p-10 flex flex-col justify-center items-center text-center shadow-lg">
             <h2 className="text-3xl text-white font-bold mb-6">FINAL VERDICT</h2>
             <p className="text-2xl text-gray-300 max-w-4xl italic leading-relaxed">
                "Windows treats you like a consumer who needs protection from yourself. Linux treats you like an administrator who knows what they are doing. I choose control."
             </p>
             <div className="mt-8">
                <span className="px-4 py-2 bg-blue-600 text-black font-bold text-base font-mono uppercase tracking-widest rounded shadow hover:bg-blue-500 cursor-pointer">
                    sudo shutdown -h now
                </span>
             </div>
         </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "8: End",
    notesPrompt: "Thank the audience for their attention. Open the floor for any questions regarding the comparison.",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
        <MessageSquare size={80} className="text-blue-500 mb-4 animate-bounce" />
        <h1 className="text-6xl font-bold text-white tracking-tighter">
          THANK YOU
        </h1>
        <p className="text-2xl text-gray-400">
           for your attention
        </p>
        
        <div className="w-full max-w-2xl bg-black border border-gray-700 p-6 mt-12 rounded shadow-2xl text-left font-mono">
            <div className="flex gap-2 mb-2">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-lg">
                <p className="mb-2">
                    <span className="text-green-400 font-bold">iona@archlinux</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400 font-bold">~</span>
                    <span className="text-white">$ echo "Any Questions?"</span>
                </p>
                <p className="text-white mb-4">Any Questions?</p>
                <p>
                    <span className="text-green-400 font-bold">iona@archlinux</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400 font-bold">~</span>
                    <span className="text-white">$ exit 0<span className="animate-pulse">_</span></span>
                </p>
            </div>
        </div>
      </div>
    )
  }
];