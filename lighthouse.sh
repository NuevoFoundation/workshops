trace_dir() {
    lhci autorun --collect.static-dist-dir="$1"/* --upload.target=temporary-public-storage
    for pathname in "$1"/*; do 
        if [ -d "$pathname" ]; then
            echo "$pathname"
            lhci autorun --collect.static-dist-dir="$pathname" --collect.number-of-runs=1 --upload.target=temporary-public-storage
        fi
    done                
}

trace_dir ./public