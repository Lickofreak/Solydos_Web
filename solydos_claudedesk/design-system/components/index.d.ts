import type * as React from 'react';
export type IconName = 'north' | 'rings' | 'checker' | 'star' | 'down' | 'globe' | 'barcode' | 'chat' | 'core' | 'handoff' | 'strata' | 'arrow' | 'play' | 'cross';
export interface Action { label: string; href?: string }
export declare function Logo(props: { size?: number; wordmark?: boolean; className?: string }): React.ReactElement;
export declare function Mark(props: { size?: number }): React.ReactElement;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'ghost'; size?: 'md' | 'sm'; href?: string; icon?: IconName }
export declare function Button(props: ButtonProps): React.ReactElement;
export declare function Tag(props: { tone?: 'default' | 'signal' | 'solid'; live?: boolean; children?: React.ReactNode; className?: string }): React.ReactElement;
export declare function Annotation(props: { marker?: 'node' | 'cross'; leader?: boolean; value?: React.ReactNode; direction?: 'row' | 'column'; children?: React.ReactNode; className?: string }): React.ReactElement;
export declare function Legend(props: { items?: { icon: IconName; label: string }[]; labels?: boolean; className?: string }): React.ReactElement;
export declare function Header(props: { links?: Action[]; meta?: string; cta?: Action; secondary?: Action; homeHref?: string; className?: string }): React.ReactElement;
export declare function Specimen(props: { src?: string; annotate?: boolean; core?: boolean; caption?: string; label?: string; className?: string }): React.ReactElement;
export declare function SampleArt(props: { kind?: 'chat' | 'core' | 'strata'; src?: string }): React.ReactElement;
export declare function SampleCard(props: { index?: string; label?: string; kind?: 'chat' | 'core' | 'strata'; children?: React.ReactNode; className?: string }): React.ReactElement;
export interface HeroProps { kicker?: string; title: React.ReactNode; tag?: string; subtitle?: React.ReactNode; primaryAction?: Action; secondaryAction?: Action; coordinates?: { label: string; value: string }[]; samples?: { index: string; label: string; kind?: 'chat' | 'core' | 'strata' }[]; edition?: string; media?: React.ReactNode | null; legend?: boolean; className?: string }
export declare function Hero(props: HeroProps): React.ReactElement;
export declare function FeatureCard(props: { index?: string; icon?: IconName | React.ReactNode; title: React.ReactNode; children?: React.ReactNode; metric?: { label: string; value: string }; className?: string }): React.ReactElement;
export declare function MediaSection(props: { kicker?: string; title?: React.ReactNode; subtitle?: React.ReactNode; caption?: string; duration?: string; reference?: string; playLabel?: string; children?: React.ReactNode; className?: string }): React.ReactElement;
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> { index?: string; label?: string; hint?: string; error?: string; multiline?: boolean; optional?: boolean }
export declare function TextField(props: TextFieldProps): React.ReactElement;
export declare function Footer(props: { tagline?: string; columns?: { title: string; links?: Action[] }[]; socials?: Action[]; unit?: string; meta?: string; copyright?: string; className?: string }): React.ReactElement;
export declare function Icon(props: { name: IconName; size?: number; className?: string }): React.ReactElement;
