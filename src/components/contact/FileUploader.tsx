"use client";

import { useState, useRef, useCallback } from "react";
import { validateFile } from "@/lib/zod-schemas";

interface FileUploaderProps {
  files: File[];
  onChange: (files: File[]) => void;
  accept?: string;
  label: string;
  description?: string;
}

export function FileUploader({
  files,
  onChange,
  accept = ".step,.stp,.iges,.igs,.stl,.x_t,.x_b,.sldprt,.pdf,.jpg,.jpeg,.png,.zip",
  label,
  description,
}: FileUploaderProps) {
  const [dragOver, setDragOver] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    (newFiles: FileList | null) => {
      if (!newFiles) return;

      const newErrors: string[] = [];
      const validFiles: File[] = [...files];

      for (let i = 0; i < newFiles.length; i++) {
        const file = newFiles[i];
        const result = validateFile(file);
        if (result.valid) {
          // Avoid duplicates
          if (!validFiles.find((f) => f.name === file.name && f.size === file.size)) {
            validFiles.push(file);
          }
        } else {
          newErrors.push(result.error!);
        }
      }

      // Cap at 5 files
      if (validFiles.length > 5) {
        newErrors.push("Maximum 5 files allowed. Extra files were skipped.");
        onChange(validFiles.slice(0, 5));
      } else {
        onChange(validFiles);
      }

      setErrors(newErrors);
    },
    [files, onChange]
  );

  const removeFile = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    onChange(updated);
    setErrors([]);
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-primary">{label}</label>
      {description && (
        <p className="mb-2 text-xs text-steel-light">{description}</p>
      )}

      {/* Drop zone */}
      <div
        className={`cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-colors ${
          dragOver
            ? "border-accent bg-orange-50"
            : "border-gray-300 hover:border-steel-light bg-gray-50"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          handleFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Upload files"
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept={accept}
          multiple
          onChange={(e) => handleFiles(e.target.files)}
        />
        <svg
          className="mx-auto h-10 w-10 text-steel-light"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <p className="mt-2 text-sm text-steel">
          <span className="font-medium text-accent">Click to upload</span> or drag
          and drop
        </p>
        <p className="mt-1 text-xs text-steel-light">
          STEP, IGES, STL, X_T, SLDPRT, PDF, JPG, PNG, ZIP — Max 25 MB per file, up to 5 files
        </p>
      </div>

      {/* File list */}
      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map((file, i) => (
            <li
              key={`${file.name}-${i}`}
              className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-3 py-2 text-sm"
            >
              <div className="flex items-center gap-2 min-w-0">
                <svg className="h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="truncate text-steel">{file.name}</span>
                <span className="text-xs text-steel-light shrink-0">
                  {formatSize(file.size)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => removeFile(i)}
                className="ml-2 rounded p-1 text-steel-light hover:bg-red-50 hover:text-red-500 shrink-0"
                aria-label={`Remove ${file.name}`}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Errors */}
      {errors.length > 0 && (
        <div className="mt-2 space-y-1">
          {errors.map((err, i) => (
            <p key={i} className="text-xs text-red-600">
              {err}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
