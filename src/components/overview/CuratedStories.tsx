import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { STORIES_DATA } from '../../data/mockData';
import { Badge } from '../ui/Badge';

export const CuratedStories: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-frost-100 tracking-tight">
            Community Drives & Owner Stories
          </h3>
          <p className="text-sm text-frost-500">
            Weekend road trips, EV tips & RYDR Owners Club updates
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STORIES_DATA.map((story) => (
          <div
            key={story.id}
            className="group bg-obsidian-800 rounded-3xl p-4 border border-obsidian-500/80 hover:border-teal-500/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-4 border border-obsidian-500/50">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="obsidian" size="sm">
                    {story.category}
                  </Badge>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-frost-600">
                  <span>RYDR Dispatch</span>
                  <span>{story.readTime}</span>
                </div>
                <h4 className="font-serif text-base font-semibold text-frost-100 group-hover:text-teal-300 transition-colors line-clamp-1">
                  {story.title}
                </h4>
                <p className="text-xs text-frost-500 line-clamp-2 leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-obsidian-500/50 flex items-center justify-between text-xs font-semibold text-frost-200 group-hover:text-teal-300">
              <span>Read Story</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
