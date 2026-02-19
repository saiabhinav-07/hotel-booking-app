package com.project.hotel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.hotel.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
