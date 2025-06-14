import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Building2 } from "lucide-react"

interface VendorCardProps {
  name: string
  category: string
  website: string
}

export function VendorCard({ name, category, website }: VendorCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-surface border-border">
      <CardHeader className="space-y-3">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-accent/10">
            <Building2 className="h-5 w-5 text-accent" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-brand transition-colors">
              {name}
            </CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-medium text-accent uppercase tracking-wide">{category}</p>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full group/btn hover:bg-brand hover:text-brand-foreground hover:border-brand"
          asChild
        >
          <a href={website} target="_blank" rel="noopener noreferrer">
            Visit Website
            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
