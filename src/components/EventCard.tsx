import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

interface EventCardProps {
  name: string
  location: string
  date: string
}

export function EventCard({ name, location, date }: EventCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-surface border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground group-hover:text-brand transition-colors">
          {name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-sm">{location}</span>
          </div>

          <div className="flex items-center space-x-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-accent" />
            <span className="text-sm">{date}</span>
          </div>
        </div>

        <div className="pt-2">
          <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
            Upcoming
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
