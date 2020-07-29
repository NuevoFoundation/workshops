trace_dir() {
    lhci autorun --collect.static-dist-dir="$1"/*
    for pathname in "$1"/*; do 
        if [ -d "$pathname" ]; then
            echo "$pathname"
            lhci autorun --collect.static-dist-dir="$pathname"
        fi
    done                
}

trace_dir ./public