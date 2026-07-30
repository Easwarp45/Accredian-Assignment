import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Program } from '../../types';
import { Clock, Layers, Users, Star, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface ProgramCatalogModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
  onBookDemo: (programTitle: string) => void;
  onSyllabusSuccess: (message: string) => void;
}

export const ProgramCatalogModal: React.FC<ProgramCatalogModalProps> = ({
  program,
  isOpen,
  onClose,
  onBookDemo,
  onSyllabusSuccess
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  if (!program) return null;

  const handleDownloadSyllabus = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !/\S+@\S+\.\S+/.test(emailInput)) {
      alert('Please enter a valid work email address.');
      return;
    }

    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      onSyllabusSuccess(`Syllabus for "${program.title}" sent to ${emailInput}!`);
      setEmailInput('');
    }, 800);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={program.title}
      subtitle={`${program.categoryLabel} • ${program.level} Level Program`}
      maxWidth="2xl"
    >
      <div className="space-y-6">
        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600 shrink-0" />
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Duration</p>
              <p className="text-xs font-bold text-slate-800">{program.duration}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600 shrink-0" />
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Modules</p>
              <p className="text-xs font-bold text-slate-800">{program.modulesCount} Modules</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-600 shrink-0" />
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Learners</p>
              <p className="text-xs font-bold text-slate-800">{(program.enrolledCount / 1000).toFixed(1)}k+ Trained</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Rating</p>
              <p className="text-xs font-bold text-slate-800">{program.rating} / 5.0</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Program Overview</h4>
          <p className="text-slate-600 text-sm leading-relaxed">{program.description}</p>
        </div>

        {/* Skills Covered */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Key Skills & Competencies</h4>
          <div className="flex flex-wrap gap-2">
            {program.skillsCovered.map((skill, index) => (
              <Badge key={index} variant="blue" size="md">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Outcomes & Capstones */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Enterprise Deliverables</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {program.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instant Syllabus Form */}
        <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-100">
          <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Download Detailed Curriculum Syllabus</span>
          </h4>
          <p className="text-xs text-slate-600 mt-1 mb-3">
            Enter your work email to receive the complete PDF syllabus and module breakdown instantly.
          </p>
          <form onSubmit={handleDownloadSyllabus} className="flex gap-2">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="work.email@company.com"
              aria-label="Work Email Address"
              className="flex-1 px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button type="submit" variant="primary" size="sm" disabled={isDownloading}>
              {isDownloading ? 'Sending...' : 'Get Syllabus'}
            </Button>
          </form>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => {
              onClose();
              onBookDemo(program.title);
            }}
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Enroll Team / Request Cohort Demo
          </Button>
        </div>
      </div>
    </Modal>
  );
};
