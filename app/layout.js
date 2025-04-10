import { Inter} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";


const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "Sensai - Ai Career Coach",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{baseTheme:dark,}}> 
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
            <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
      
          </ThemeProvider>
          {/* header */}
         <Header></Header>
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto text-center text-gray-200 px-4">
              <p>Made with 💗 by Prakhar</p>
            </div>
          </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
