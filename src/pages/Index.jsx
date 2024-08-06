import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navigation from "../components/Navigation"

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My App</h1>
      </header>

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Welcome to Your Bare-Bones App</h2>
        <p className="mb-4">This is a simple starting point. Feel free to modify and expand!</p>
        
        <div className="space-y-4">
          <Input placeholder="Enter something..." />
          <Button>Click me</Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
